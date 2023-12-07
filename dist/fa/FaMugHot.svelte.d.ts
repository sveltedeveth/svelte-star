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
export type FaMugHotProps = typeof __propDef.props;
export type FaMugHotEvents = typeof __propDef.events;
export type FaMugHotSlots = typeof __propDef.slots;
export default class FaMugHot extends SvelteComponentTyped<FaMugHotProps, FaMugHotEvents, FaMugHotSlots> {
}
export {};
