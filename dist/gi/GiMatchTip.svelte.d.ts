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
export type GiMatchTipProps = typeof __propDef.props;
export type GiMatchTipEvents = typeof __propDef.events;
export type GiMatchTipSlots = typeof __propDef.slots;
export default class GiMatchTip extends SvelteComponentTyped<GiMatchTipProps, GiMatchTipEvents, GiMatchTipSlots> {
}
export {};
