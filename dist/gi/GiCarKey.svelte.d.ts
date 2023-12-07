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
export type GiCarKeyProps = typeof __propDef.props;
export type GiCarKeyEvents = typeof __propDef.events;
export type GiCarKeySlots = typeof __propDef.slots;
export default class GiCarKey extends SvelteComponentTyped<GiCarKeyProps, GiCarKeyEvents, GiCarKeySlots> {
}
export {};
