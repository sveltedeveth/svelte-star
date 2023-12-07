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
export type GiSpikyEclipseProps = typeof __propDef.props;
export type GiSpikyEclipseEvents = typeof __propDef.events;
export type GiSpikyEclipseSlots = typeof __propDef.slots;
export default class GiSpikyEclipse extends SvelteComponentTyped<GiSpikyEclipseProps, GiSpikyEclipseEvents, GiSpikyEclipseSlots> {
}
export {};
