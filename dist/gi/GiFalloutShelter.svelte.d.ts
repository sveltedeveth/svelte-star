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
export type GiFalloutShelterProps = typeof __propDef.props;
export type GiFalloutShelterEvents = typeof __propDef.events;
export type GiFalloutShelterSlots = typeof __propDef.slots;
export default class GiFalloutShelter extends SvelteComponentTyped<GiFalloutShelterProps, GiFalloutShelterEvents, GiFalloutShelterSlots> {
}
export {};
