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
export type GiCorsetProps = typeof __propDef.props;
export type GiCorsetEvents = typeof __propDef.events;
export type GiCorsetSlots = typeof __propDef.slots;
export default class GiCorset extends SvelteComponentTyped<GiCorsetProps, GiCorsetEvents, GiCorsetSlots> {
}
export {};
