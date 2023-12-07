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
export type GiRootTipProps = typeof __propDef.props;
export type GiRootTipEvents = typeof __propDef.events;
export type GiRootTipSlots = typeof __propDef.slots;
export default class GiRootTip extends SvelteComponentTyped<GiRootTipProps, GiRootTipEvents, GiRootTipSlots> {
}
export {};
