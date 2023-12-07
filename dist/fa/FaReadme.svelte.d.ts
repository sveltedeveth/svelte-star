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
export type FaReadmeProps = typeof __propDef.props;
export type FaReadmeEvents = typeof __propDef.events;
export type FaReadmeSlots = typeof __propDef.slots;
export default class FaReadme extends SvelteComponentTyped<FaReadmeProps, FaReadmeEvents, FaReadmeSlots> {
}
export {};
