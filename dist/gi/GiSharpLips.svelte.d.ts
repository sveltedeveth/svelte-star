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
export type GiSharpLipsProps = typeof __propDef.props;
export type GiSharpLipsEvents = typeof __propDef.events;
export type GiSharpLipsSlots = typeof __propDef.slots;
export default class GiSharpLips extends SvelteComponentTyped<GiSharpLipsProps, GiSharpLipsEvents, GiSharpLipsSlots> {
}
export {};
