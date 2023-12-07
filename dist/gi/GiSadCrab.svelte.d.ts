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
export type GiSadCrabProps = typeof __propDef.props;
export type GiSadCrabEvents = typeof __propDef.events;
export type GiSadCrabSlots = typeof __propDef.slots;
export default class GiSadCrab extends SvelteComponentTyped<GiSadCrabProps, GiSadCrabEvents, GiSadCrabSlots> {
}
export {};
