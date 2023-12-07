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
export type GiCastleProps = typeof __propDef.props;
export type GiCastleEvents = typeof __propDef.events;
export type GiCastleSlots = typeof __propDef.slots;
export default class GiCastle extends SvelteComponentTyped<GiCastleProps, GiCastleEvents, GiCastleSlots> {
}
export {};
