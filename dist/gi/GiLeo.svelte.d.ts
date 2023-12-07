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
export type GiLeoProps = typeof __propDef.props;
export type GiLeoEvents = typeof __propDef.events;
export type GiLeoSlots = typeof __propDef.slots;
export default class GiLeo extends SvelteComponentTyped<GiLeoProps, GiLeoEvents, GiLeoSlots> {
}
export {};
