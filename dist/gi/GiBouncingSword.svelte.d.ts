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
export type GiBouncingSwordProps = typeof __propDef.props;
export type GiBouncingSwordEvents = typeof __propDef.events;
export type GiBouncingSwordSlots = typeof __propDef.slots;
export default class GiBouncingSword extends SvelteComponentTyped<GiBouncingSwordProps, GiBouncingSwordEvents, GiBouncingSwordSlots> {
}
export {};
