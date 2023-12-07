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
export type GiTabletopPlayersProps = typeof __propDef.props;
export type GiTabletopPlayersEvents = typeof __propDef.events;
export type GiTabletopPlayersSlots = typeof __propDef.slots;
export default class GiTabletopPlayers extends SvelteComponentTyped<GiTabletopPlayersProps, GiTabletopPlayersEvents, GiTabletopPlayersSlots> {
}
export {};
