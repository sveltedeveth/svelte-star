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
export type GiDuelProps = typeof __propDef.props;
export type GiDuelEvents = typeof __propDef.events;
export type GiDuelSlots = typeof __propDef.slots;
export default class GiDuel extends SvelteComponentTyped<GiDuelProps, GiDuelEvents, GiDuelSlots> {
}
export {};
