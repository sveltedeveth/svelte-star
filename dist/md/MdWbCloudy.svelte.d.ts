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
export type MdWbCloudyProps = typeof __propDef.props;
export type MdWbCloudyEvents = typeof __propDef.events;
export type MdWbCloudySlots = typeof __propDef.slots;
export default class MdWbCloudy extends SvelteComponentTyped<MdWbCloudyProps, MdWbCloudyEvents, MdWbCloudySlots> {
}
export {};
