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
export type IoMdPodiumProps = typeof __propDef.props;
export type IoMdPodiumEvents = typeof __propDef.events;
export type IoMdPodiumSlots = typeof __propDef.slots;
export default class IoMdPodium extends SvelteComponentTyped<IoMdPodiumProps, IoMdPodiumEvents, IoMdPodiumSlots> {
}
export {};
