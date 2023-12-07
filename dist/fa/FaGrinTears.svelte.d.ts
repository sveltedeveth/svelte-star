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
export type FaGrinTearsProps = typeof __propDef.props;
export type FaGrinTearsEvents = typeof __propDef.events;
export type FaGrinTearsSlots = typeof __propDef.slots;
export default class FaGrinTears extends SvelteComponentTyped<FaGrinTearsProps, FaGrinTearsEvents, FaGrinTearsSlots> {
}
export {};
