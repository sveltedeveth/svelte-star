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
export type GiStackProps = typeof __propDef.props;
export type GiStackEvents = typeof __propDef.events;
export type GiStackSlots = typeof __propDef.slots;
export default class GiStack extends SvelteComponentTyped<GiStackProps, GiStackEvents, GiStackSlots> {
}
export {};
