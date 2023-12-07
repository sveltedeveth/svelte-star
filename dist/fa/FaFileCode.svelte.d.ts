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
export type FaFileCodeProps = typeof __propDef.props;
export type FaFileCodeEvents = typeof __propDef.events;
export type FaFileCodeSlots = typeof __propDef.slots;
export default class FaFileCode extends SvelteComponentTyped<FaFileCodeProps, FaFileCodeEvents, FaFileCodeSlots> {
}
export {};
