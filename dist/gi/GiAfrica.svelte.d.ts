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
export type GiAfricaProps = typeof __propDef.props;
export type GiAfricaEvents = typeof __propDef.events;
export type GiAfricaSlots = typeof __propDef.slots;
export default class GiAfrica extends SvelteComponentTyped<GiAfricaProps, GiAfricaEvents, GiAfricaSlots> {
}
export {};
