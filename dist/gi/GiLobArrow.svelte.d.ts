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
export type GiLobArrowProps = typeof __propDef.props;
export type GiLobArrowEvents = typeof __propDef.events;
export type GiLobArrowSlots = typeof __propDef.slots;
export default class GiLobArrow extends SvelteComponentTyped<GiLobArrowProps, GiLobArrowEvents, GiLobArrowSlots> {
}
export {};
