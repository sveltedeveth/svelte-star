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
export type GiTwoShadowsProps = typeof __propDef.props;
export type GiTwoShadowsEvents = typeof __propDef.events;
export type GiTwoShadowsSlots = typeof __propDef.slots;
export default class GiTwoShadows extends SvelteComponentTyped<GiTwoShadowsProps, GiTwoShadowsEvents, GiTwoShadowsSlots> {
}
export {};
