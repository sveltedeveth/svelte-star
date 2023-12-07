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
export type GiBottledShadowProps = typeof __propDef.props;
export type GiBottledShadowEvents = typeof __propDef.events;
export type GiBottledShadowSlots = typeof __propDef.slots;
export default class GiBottledShadow extends SvelteComponentTyped<GiBottledShadowProps, GiBottledShadowEvents, GiBottledShadowSlots> {
}
export {};
