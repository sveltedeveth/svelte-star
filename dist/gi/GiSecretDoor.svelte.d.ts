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
export type GiSecretDoorProps = typeof __propDef.props;
export type GiSecretDoorEvents = typeof __propDef.events;
export type GiSecretDoorSlots = typeof __propDef.slots;
export default class GiSecretDoor extends SvelteComponentTyped<GiSecretDoorProps, GiSecretDoorEvents, GiSecretDoorSlots> {
}
export {};
