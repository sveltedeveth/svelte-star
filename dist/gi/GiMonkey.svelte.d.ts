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
export type GiMonkeyProps = typeof __propDef.props;
export type GiMonkeyEvents = typeof __propDef.events;
export type GiMonkeySlots = typeof __propDef.slots;
export default class GiMonkey extends SvelteComponentTyped<GiMonkeyProps, GiMonkeyEvents, GiMonkeySlots> {
}
export {};
