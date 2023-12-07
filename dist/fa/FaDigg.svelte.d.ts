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
export type FaDiggProps = typeof __propDef.props;
export type FaDiggEvents = typeof __propDef.events;
export type FaDiggSlots = typeof __propDef.slots;
export default class FaDigg extends SvelteComponentTyped<FaDiggProps, FaDiggEvents, FaDiggSlots> {
}
export {};
