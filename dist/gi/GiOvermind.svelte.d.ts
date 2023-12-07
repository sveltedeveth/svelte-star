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
export type GiOvermindProps = typeof __propDef.props;
export type GiOvermindEvents = typeof __propDef.events;
export type GiOvermindSlots = typeof __propDef.slots;
export default class GiOvermind extends SvelteComponentTyped<GiOvermindProps, GiOvermindEvents, GiOvermindSlots> {
}
export {};
