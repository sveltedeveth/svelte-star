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
export type IoIosPlanetProps = typeof __propDef.props;
export type IoIosPlanetEvents = typeof __propDef.events;
export type IoIosPlanetSlots = typeof __propDef.slots;
export default class IoIosPlanet extends SvelteComponentTyped<IoIosPlanetProps, IoIosPlanetEvents, IoIosPlanetSlots> {
}
export {};
