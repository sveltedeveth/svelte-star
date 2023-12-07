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
export type GiGluttonyProps = typeof __propDef.props;
export type GiGluttonyEvents = typeof __propDef.events;
export type GiGluttonySlots = typeof __propDef.slots;
export default class GiGluttony extends SvelteComponentTyped<GiGluttonyProps, GiGluttonyEvents, GiGluttonySlots> {
}
export {};
