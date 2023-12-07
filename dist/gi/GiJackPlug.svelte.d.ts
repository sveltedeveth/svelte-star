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
export type GiJackPlugProps = typeof __propDef.props;
export type GiJackPlugEvents = typeof __propDef.events;
export type GiJackPlugSlots = typeof __propDef.slots;
export default class GiJackPlug extends SvelteComponentTyped<GiJackPlugProps, GiJackPlugEvents, GiJackPlugSlots> {
}
export {};
