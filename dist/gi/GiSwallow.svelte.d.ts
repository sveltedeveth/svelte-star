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
export type GiSwallowProps = typeof __propDef.props;
export type GiSwallowEvents = typeof __propDef.events;
export type GiSwallowSlots = typeof __propDef.slots;
export default class GiSwallow extends SvelteComponentTyped<GiSwallowProps, GiSwallowEvents, GiSwallowSlots> {
}
export {};
