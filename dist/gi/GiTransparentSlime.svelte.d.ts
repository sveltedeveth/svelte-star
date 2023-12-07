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
export type GiTransparentSlimeProps = typeof __propDef.props;
export type GiTransparentSlimeEvents = typeof __propDef.events;
export type GiTransparentSlimeSlots = typeof __propDef.slots;
export default class GiTransparentSlime extends SvelteComponentTyped<GiTransparentSlimeProps, GiTransparentSlimeEvents, GiTransparentSlimeSlots> {
}
export {};
