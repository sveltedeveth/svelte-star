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
export type GiSandCastleProps = typeof __propDef.props;
export type GiSandCastleEvents = typeof __propDef.events;
export type GiSandCastleSlots = typeof __propDef.slots;
export default class GiSandCastle extends SvelteComponentTyped<GiSandCastleProps, GiSandCastleEvents, GiSandCastleSlots> {
}
export {};
