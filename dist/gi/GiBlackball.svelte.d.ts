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
export type GiBlackballProps = typeof __propDef.props;
export type GiBlackballEvents = typeof __propDef.events;
export type GiBlackballSlots = typeof __propDef.slots;
export default class GiBlackball extends SvelteComponentTyped<GiBlackballProps, GiBlackballEvents, GiBlackballSlots> {
}
export {};
