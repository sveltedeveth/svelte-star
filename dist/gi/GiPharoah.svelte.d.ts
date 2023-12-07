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
export type GiPharoahProps = typeof __propDef.props;
export type GiPharoahEvents = typeof __propDef.events;
export type GiPharoahSlots = typeof __propDef.slots;
export default class GiPharoah extends SvelteComponentTyped<GiPharoahProps, GiPharoahEvents, GiPharoahSlots> {
}
export {};
