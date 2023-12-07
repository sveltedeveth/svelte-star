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
export type GiBlacksmithProps = typeof __propDef.props;
export type GiBlacksmithEvents = typeof __propDef.events;
export type GiBlacksmithSlots = typeof __propDef.slots;
export default class GiBlacksmith extends SvelteComponentTyped<GiBlacksmithProps, GiBlacksmithEvents, GiBlacksmithSlots> {
}
export {};
