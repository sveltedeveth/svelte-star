import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaFantasyFlightGamesProps = typeof __propDef.props;
export type FaFantasyFlightGamesEvents = typeof __propDef.events;
export type FaFantasyFlightGamesSlots = typeof __propDef.slots;
export default class FaFantasyFlightGames extends SvelteComponentTyped<FaFantasyFlightGamesProps, FaFantasyFlightGamesEvents, FaFantasyFlightGamesSlots> {
}
export {};
