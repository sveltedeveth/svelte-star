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
export type GiElderberryProps = typeof __propDef.props;
export type GiElderberryEvents = typeof __propDef.events;
export type GiElderberrySlots = typeof __propDef.slots;
export default class GiElderberry extends SvelteComponentTyped<GiElderberryProps, GiElderberryEvents, GiElderberrySlots> {
}
export {};
