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
export type FaYarnProps = typeof __propDef.props;
export type FaYarnEvents = typeof __propDef.events;
export type FaYarnSlots = typeof __propDef.slots;
export default class FaYarn extends SvelteComponentTyped<FaYarnProps, FaYarnEvents, FaYarnSlots> {
}
export {};
