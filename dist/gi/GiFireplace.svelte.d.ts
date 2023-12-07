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
export type GiFireplaceProps = typeof __propDef.props;
export type GiFireplaceEvents = typeof __propDef.events;
export type GiFireplaceSlots = typeof __propDef.slots;
export default class GiFireplace extends SvelteComponentTyped<GiFireplaceProps, GiFireplaceEvents, GiFireplaceSlots> {
}
export {};
