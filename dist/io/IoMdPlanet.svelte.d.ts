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
export type IoMdPlanetProps = typeof __propDef.props;
export type IoMdPlanetEvents = typeof __propDef.events;
export type IoMdPlanetSlots = typeof __propDef.slots;
export default class IoMdPlanet extends SvelteComponentTyped<IoMdPlanetProps, IoMdPlanetEvents, IoMdPlanetSlots> {
}
export {};
