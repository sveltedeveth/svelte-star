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
export type GiBalaclavaProps = typeof __propDef.props;
export type GiBalaclavaEvents = typeof __propDef.events;
export type GiBalaclavaSlots = typeof __propDef.slots;
export default class GiBalaclava extends SvelteComponentTyped<GiBalaclavaProps, GiBalaclavaEvents, GiBalaclavaSlots> {
}
export {};
