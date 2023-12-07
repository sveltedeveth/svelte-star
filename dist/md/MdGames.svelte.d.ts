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
export type MdGamesProps = typeof __propDef.props;
export type MdGamesEvents = typeof __propDef.events;
export type MdGamesSlots = typeof __propDef.slots;
export default class MdGames extends SvelteComponentTyped<MdGamesProps, MdGamesEvents, MdGamesSlots> {
}
export {};
