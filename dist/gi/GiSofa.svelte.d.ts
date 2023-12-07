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
export type GiSofaProps = typeof __propDef.props;
export type GiSofaEvents = typeof __propDef.events;
export type GiSofaSlots = typeof __propDef.slots;
export default class GiSofa extends SvelteComponentTyped<GiSofaProps, GiSofaEvents, GiSofaSlots> {
}
export {};
