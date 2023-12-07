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
export type DiAptanaProps = typeof __propDef.props;
export type DiAptanaEvents = typeof __propDef.events;
export type DiAptanaSlots = typeof __propDef.slots;
export default class DiAptana extends SvelteComponentTyped<DiAptanaProps, DiAptanaEvents, DiAptanaSlots> {
}
export {};
