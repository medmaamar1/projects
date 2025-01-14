def min_pieces(N):
    if N == 0:
        return 0
    if N < 0:
        return float('inf')
    return 1 + min(min_pieces(N - 1), min_pieces(N - 5), min_pieces(N - 7))

print(min_pieces(13)) # Exemple avec N = 10