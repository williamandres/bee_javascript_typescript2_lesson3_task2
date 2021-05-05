//Filter out the geese

export function gooseFilter (birds: string[]): string[] {
    const geese: Set<string> = new Set(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']);

    return birds.filter(bird => !geese.has(bird));
}