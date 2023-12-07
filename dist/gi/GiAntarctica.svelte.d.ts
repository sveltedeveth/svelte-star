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
export type GiAntarcticaProps = typeof __propDef.props;
export type GiAntarcticaEvents = typeof __propDef.events;
export type GiAntarcticaSlots = typeof __propDef.slots;
export default class GiAntarctica extends SvelteComponentTyped<GiAntarcticaProps, GiAntarcticaEvents, GiAntarcticaSlots> {
}
export {};
