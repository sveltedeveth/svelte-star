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
export type FaSymfonyProps = typeof __propDef.props;
export type FaSymfonyEvents = typeof __propDef.events;
export type FaSymfonySlots = typeof __propDef.slots;
export default class FaSymfony extends SvelteComponentTyped<FaSymfonyProps, FaSymfonyEvents, FaSymfonySlots> {
}
export {};
