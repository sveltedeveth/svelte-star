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
export type GiXylophoneProps = typeof __propDef.props;
export type GiXylophoneEvents = typeof __propDef.events;
export type GiXylophoneSlots = typeof __propDef.slots;
export default class GiXylophone extends SvelteComponentTyped<GiXylophoneProps, GiXylophoneEvents, GiXylophoneSlots> {
}
export {};
