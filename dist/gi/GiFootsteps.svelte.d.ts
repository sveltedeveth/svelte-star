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
export type GiFootstepsProps = typeof __propDef.props;
export type GiFootstepsEvents = typeof __propDef.events;
export type GiFootstepsSlots = typeof __propDef.slots;
export default class GiFootsteps extends SvelteComponentTyped<GiFootstepsProps, GiFootstepsEvents, GiFootstepsSlots> {
}
export {};
