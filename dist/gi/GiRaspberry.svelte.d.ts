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
export type GiRaspberryProps = typeof __propDef.props;
export type GiRaspberryEvents = typeof __propDef.events;
export type GiRaspberrySlots = typeof __propDef.slots;
export default class GiRaspberry extends SvelteComponentTyped<GiRaspberryProps, GiRaspberryEvents, GiRaspberrySlots> {
}
export {};
